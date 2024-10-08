import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

export function ReviewCard() {
  return (
    <div className="space-y-4 w-1/2  bg-slate-800 p-4 rounded-md">
      <Card className="w-full bg-inherit text-white p-4">
        <CardContent>
          <div className="flex justify-between gap-4">
            <div>
              <div className="flex gap-2 items-center mb-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">Username</h3>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <p className="text-start">
                  <strong>Review:</strong> The stay at Blue Bahari was very
                  lovely. Especially our waitress Mrs. Courage was very kind and
                  friendly at the Green and Grill Restaurant. I recommend
                  visiting the place since the atmosphere is very nice.
                </p>
                <Badge variant="postive">Positive</Badge>
              </div>
            </div>
            <div className="ml-auto">
              <Badge variant="outline" className="text-white">
                <DotsHorizontalIcon className="w-4 h-4" />
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="w-full bg-inherit text-white p-4">
        <CardContent>
          <div className="flex justify-between gap-4">
            <div>
              <div className="flex gap-2 items-center mb-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold">Username</h3>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <p className="text-start mr-4">
                  <strong>Review:</strong> While we were booking this place, we
                  chose it because we saw a beautiful beach and thought it was
                  inside the hotel. However, it was far away from the hotel,
                  which should not be a problem if the room cost was cheaper.
                  But without a direct beach, it is not good value for the
                  money. Especially since the rooms were under average and they
                  didn't spray for mosquitoes.
                </p>
                <Badge variant="postive">Positive</Badge>
              </div>
            </div>
            <div className="ml-auto">
              <Badge variant="outline" className="text-white">
                <DotsHorizontalIcon className="w-4 h-4" />
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
