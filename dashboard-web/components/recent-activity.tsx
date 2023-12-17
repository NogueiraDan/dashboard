import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { data } from "@/mocks/recent-activity";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RecentActivity() {
  return (
    <Card className="p-2">
      <CardHeader>
        <CardTitle>Atividade Recente</CardTitle>
      </CardHeader>
      <ScrollArea className="h-[350px] w-full ">
        <CardContent className="pl-2">
          {data.map((item) => (
            <>
              <div
                key={item.id}
                className="flex  mb-4 flex-col justify-between md:flex-row  "
              >
                <div className="flex  flex-col md:flex-row">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="md:ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {item.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.email}
                    </p>
                  </div>
                </div>
                <div className="font-medium">{item.sale}</div>
              </div>
            </>
          ))}
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
