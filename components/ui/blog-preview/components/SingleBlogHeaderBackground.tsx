import { cn } from '../../../utils/cn';
interface ISingleBlogHeaderBackgroundProp{
    className?:string
}
const SingleBlogHeaderBackground = ({ className }:ISingleBlogHeaderBackgroundProp) => {
  return (
    <div
      className={cn(
        'relative w-full min-h-[320px] overflow-hidden bg-[#050505]',
        className,
      )}
    >
      {/* radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,200,120,0.08),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,200,120,0.06),transparent_45%)]" />

      {/* grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:48px_48px]"
      />

      {/* blocks */}
      <div className="absolute inset-0">
        <span
          className="absolute top-[12%] left-[8%]
          w-[clamp(60px,8vw,110px)] h-[clamp(60px,8vw,110px)]
          bg-gradient-to-br from-[rgba(255,200,120,0.25)] to-[rgba(120,90,40,0.15)]
          shadow-[0_0_30px_rgba(255,200,120,0.15),inset_0_0_20px_rgba(255,255,255,0.05)]"
        />

        <span
          className="absolute top-[22%] left-[14%]
          w-[clamp(60px,8vw,110px)] h-[clamp(60px,8vw,110px)]
          bg-gradient-to-br from-[rgba(255,200,120,0.25)] to-[rgba(120,90,40,0.15)]
          shadow-[0_0_30px_rgba(255,200,120,0.15),inset_0_0_20px_rgba(255,255,255,0.05)]"
        />

        <span
          className="absolute top-[35%] left-[42%]
          w-[clamp(60px,8vw,110px)] h-[clamp(60px,8vw,110px)]
          bg-gradient-to-br from-[rgba(255,200,120,0.25)] to-[rgba(120,90,40,0.15)]
          shadow-[0_0_30px_rgba(255,200,120,0.15),inset_0_0_20px_rgba(255,255,255,0.05)]"
        />

        <span
          className="absolute top-[18%] right-[18%]
          w-[clamp(60px,8vw,110px)] h-[clamp(60px,8vw,110px)]
          bg-gradient-to-br from-[rgba(255,200,120,0.25)] to-[rgba(120,90,40,0.15)]
          shadow-[0_0_30px_rgba(255,200,120,0.15),inset_0_0_20px_rgba(255,255,255,0.05)]"
        />
    
        <span
          className="absolute top-[40%] right-[12%]
          w-[clamp(60px,8vw,110px)] h-[clamp(60px,8vw,110px)]
          bg-gradient-to-br from-[rgba(255,200,120,0.25)] to-[rgba(120,90,40,0.15)]
          shadow-[0_0_30px_rgba(255,200,120,0.15),inset_0_0_20px_rgba(255,255,255,0.05)]"
        />

        <span
          className="absolute bottom-[18%] left-[22%]
          w-[clamp(60px,8vw,110px)] h-[clamp(60px,8vw,110px)]
          bg-gradient-to-br from-[rgba(255,200,120,0.25)] to-[rgba(120,90,40,0.15)]
          shadow-[0_0_30px_rgba(255,200,120,0.15),inset_0_0_20px_rgba(255,255,255,0.05)]"
        />
      </div>
    </div>
  );
};

export default SingleBlogHeaderBackground;
