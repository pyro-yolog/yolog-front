"use client";
import { Calendar, Home, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useRouter } from "next/navigation";

type Props = {};

function Navigation({}: Props) {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    router.push(url);
  };

  return (
    <Tabs defaultValue="home" className="w-full h-16 drop-shadow-2xl">
      <TabsList className="w-full h-full bg-white">
        <TabsTrigger
          onClick={() => handleNavigation("/calendar")}
          className="text-[#8EAA87] w-full h-full"
          value="calendar"
        >
          <Calendar />
        </TabsTrigger>
        <TabsTrigger
          onClick={() => handleNavigation("/home")}
          className="text-[#8EAA87] w-full h-full"
          value="home"
        >
          <Home />
        </TabsTrigger>
        <TabsTrigger
          onClick={() => handleNavigation("/keep")}
          className="text-[#8EAA87] w-full h-full"
          value="mypage"
        >
          <User />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

export default Navigation;
