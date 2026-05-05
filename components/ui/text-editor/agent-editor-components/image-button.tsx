"use client";
import { Editor } from "@tiptap/core";
import { useCallback, useEffect, useRef, useState } from "react";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../dialog";
import { Input } from "../../input";
import { Label } from "../../label";
import { useTextEditorConfig } from "../context/editor-config-context";

import {
  baseButtonClass,
  hoverButtonClass,
  activeButtonClass,
  uploadAndInsertImage,
  validateImageUrl,
} from "./utils";

interface ImageButtonProps {
  editor: Editor;
  isOpen?: boolean;
  onToggle?: () => void;
}

const ACCEPTED_TYPES = "image/png,image/jpeg,image/webp,image/gif,image/svg+xml";

export const ImageButton = ({ editor }: ImageButtonProps) => {
  const { onImageUpload } = useTextEditorConfig();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"upload" | "url">(onImageUpload ? "upload" : "url");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [alt, setAlt] = useState("");
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const reset = useCallback(() => {
    setFile(null);
    setPreviewUrl((prev) => {
      if (prev.startsWith("blob:")) URL.revokeObjectURL(prev);
      return "";
    });
    setAlt("");
    setUrl("");
    setUrlError(false);
    setDragOver(false);
    setTab(onImageUpload ? "upload" : "url");
  }, [onImageUpload]);

  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  useEffect(() => {
    return () => {
      if (previewUrl.startsWith("blob:")) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFile = (selected: File | undefined) => {
    if (!selected) return;
    if (!selected.type.startsWith("image/")) return;
    if (previewUrl.startsWith("blob:")) URL.revokeObjectURL(previewUrl);
    setFile(selected);
    setPreviewUrl(URL.createObjectURL(selected));
  };

  const handleInsertUpload = () => {
    if (!file || !onImageUpload) return;
    editor.commands.focus();
    uploadAndInsertImage(editor.view, null, file, onImageUpload, alt.trim() || undefined);
    setOpen(false);
  };

  const handleInsertUrl = () => {
    const validUrl = url ? validateImageUrl(url.trim()) : null;
    if (!validUrl) {
      setUrlError(true);
      return;
    }
    editor.chain().focus().setImage({ src: validUrl, alt: alt.trim() || null } as never).run();
    setOpen(false);
  };

  const canSubmit =
    tab === "upload" ? !!file : !!url.trim();

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={`${baseButtonClass} ${open ? activeButtonClass : hoverButtonClass}`}
        title="Insert Image"
        aria-label="Insert Image"
      >
        <AppIcon iconName="image" size={16} />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Insert image</DialogTitle>
            <DialogDescription>
              Choose an image and write descriptive alt text. Alt text is required for accessibility
              and SEO.
            </DialogDescription>
          </DialogHeader>

          {onImageUpload && (
            <div className="flex gap-1 border-b border-border-3">
              <button
                type="button"
                onClick={() => setTab("upload")}
                className={`px-3 py-1.5 text-sm border-b-2 -mb-px transition-colors ${
                  tab === "upload"
                    ? "border-primary text-primary-text"
                    : "border-transparent text-tertiary-text hover:text-primary-text"
                }`}
              >
                Upload
              </button>
              <button
                type="button"
                onClick={() => setTab("url")}
                className={`px-3 py-1.5 text-sm border-b-2 -mb-px transition-colors ${
                  tab === "url"
                    ? "border-primary text-primary-text"
                    : "border-transparent text-tertiary-text hover:text-primary-text"
                }`}
              >
                From URL
              </button>
            </div>
          )}

          <div className="space-y-4">
            {tab === "upload" ? (
              <>
                {!file ? (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(false);
                      handleFile(e.dataTransfer.files?.[0]);
                    }}
                    className={`flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed p-8 cursor-pointer transition-colors ${
                      dragOver
                        ? "border-primary bg-primary/10"
                        : "border-border-3 hover:border-primary/40"
                    }`}
                  >
                    <AppIcon iconName="image-up" size={28} className="text-tertiary-text" />
                    <p className="text-sm text-primary-text">Click to select or drop an image</p>
                    <p className="text-xs text-tertiary-text">PNG, JPG, WebP, GIF, SVG</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="rounded-md border border-border-3 p-2 flex items-start gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={previewUrl}
                        alt="Preview"
                        className="h-20 w-20 object-cover rounded"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-primary-text truncate">{file.name}</p>
                        <p className="text-xs text-tertiary-text">
                          {(file.size / 1024).toFixed(1)} KB
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => reset()}
                          className="mt-1 text-xs"
                        >
                          <AppIcon iconName="x" size={12} className="mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={ACCEPTED_TYPES}
                  className="hidden"
                  onChange={(e) => {
                    handleFile(e.target.files?.[0]);
                    e.target.value = "";
                  }}
                />
              </>
            ) : (
              <div className="space-y-1">
                <Label htmlFor="image-url">Image URL</Label>
                <Input
                  id="image-url"
                  type="url"
                  placeholder="https://example.com/image.png"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    setUrlError(false);
                  }}
                  className={urlError ? "border-error-border-2" : ""}
                  aria-invalid={urlError}
                />
                {urlError && (
                  <p className="text-xs text-error-border-2">Please enter a valid image URL</p>
                )}
              </div>
            )}

            <div className="space-y-1">
              <Label htmlFor="image-alt">
                Alt text <span className="text-tertiary-text">(recommended)</span>
              </Label>
              <Input
                id="image-alt"
                placeholder="Describe the image for screen readers and SEO"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canSubmit) {
                    e.preventDefault();
                    if (tab === "upload") handleInsertUpload();
                    else handleInsertUrl();
                  }
                }}
                maxLength={250}
              />
              <p className="text-xs text-tertiary-text">
                Empty alt is treated as decorative. Set descriptive text for content images.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={tab === "upload" ? handleInsertUpload : handleInsertUrl}
              disabled={!canSubmit}
            >
              Insert image
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
