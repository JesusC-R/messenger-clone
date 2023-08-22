import Sidebar from "@/app/components/sidebar/sidebar";
import getConversations from "@/app/actions/get-conversation";

import ConversationList from "./components/conversation-list";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const conversations = await getConversations();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
}
