import Sidebar from "@/app/components/sidebar/sidebar";
import getConversations from "@/app/actions/get-conversation";

import ConversationList from "./components/conversation-list";
import getUsers from "../actions/get-users";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={users}
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
}
