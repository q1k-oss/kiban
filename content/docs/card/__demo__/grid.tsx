import { ArrowRight, Star, Users, Clock, MessageCircle } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Badge,
} from 'ethereal-ui';

// Sample data for the cards
const courses = [
  {
    title: "Introduction to UI Design",
    description: "Learn the fundamentals of user interface design",
    rating: 4.8,
    students: 1234,
    duration: "4 weeks",
    reviews: 127,
    tag: "Design",
  },
  {
    title: "Advanced React Patterns",
    description: "Master complex React concepts and patterns",
    rating: 4.9,
    students: 876,
    duration: "6 weeks",
    reviews: 92,
    tag: "Development",
  },
  {
    title: "Responsive Web Development",
    description: "Build responsive websites for all devices",
    rating: 4.7,
    students: 2154,
    duration: "5 weeks",
    reviews: 213,
    tag: "Development",
  },
  {
    title: "UX Research Methods",
    description: "Learn effective user research techniques",
    rating: 4.6,
    students: 953,
    duration: "3 weeks",
    reviews: 84,
    tag: "UX",
  },
];

export default function CardGridDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {courses.map((course, index) => (
        <Card key={index} className="overflow-hidden">
          <div className={`h-2 ${
            course.tag === "Design" ? "bg-blue-500" : 
            course.tag === "Development" ? "bg-green-500" : "bg-purple-500"
          }`} />
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription className="mt-1">{course.description}</CardDescription>
              </div>
              <Badge variant="outline">{course.tag}</Badge>
            </div>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
                <span>{course.reviews} reviews</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full group">
              View Course
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
} 