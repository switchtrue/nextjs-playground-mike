"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

export function CustomerReviewsWithClientFetching() {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://dummyapi.online/api/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  if (!users) {
    return (
      <div className="grid gap-6">
        {[1, 2, 3].map((_, index) => (
          <>
            <div key={index} className="flex gap-4 w-full">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="grid w-full gap-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-32" />
                  <div className="flex items-center gap-1">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-5 w-5" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </div>
            <Separator />
          </>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      <div className="flex gap-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{users[0].name}</h3>
            <div className="flex items-center gap-1">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            I&apos;ve been experimenting with my LuminaCook Multi-Function Air
            Fryer for a few weeks now, and it&apos;s been a versatile addition
            to my kitchen. It&apos;s great for making crispy fries, chicken
            wings, and even some healthier options.
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex gap-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{users[1].name}</h3>
            <div className="flex items-center gap-1">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            I recently purchased the SparkleShine Home Cleaning Robot, and it
            has been a game-changer in my life. I used to spend hours every
            weekend cleaning my house, but now I can simply turn on this little
            robot and let it do the work. It&apos;s incredibly efficient,
            navigating around obstacles with ease. The only reason I didn&apos;t
            give it a perfect 5-star rating is that it occasionally gets stuck
            under low furniture. Overall, it&apos;s been a great addition to my
            home, saving me time and effort.
          </p>
        </div>
      </div>
      <Separator />
      <div className="flex gap-4">
        <Avatar className="w-10 h-10 border">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{users[2].name}</h3>
            <div className="flex items-center gap-1">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            The battery life is impressive, lasting me for long-haul flights
            without any issues. They are comfortable to wear for extended
            periods, and I appreciate the sleek design. Worth every penny, and
            I&apos;d recommend these headphones to anyone who values
            high-quality audio and peace and quiet.
          </p>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
