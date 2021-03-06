import React, { useState } from "react";
import { Post } from "@fider/models";
import { Button, List, ListItem } from "@fider/components";
import { actions } from "@fider/services";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useFider } from "@fider/hooks";

interface NotificationsPanelProps {
  post: Post;
  subscribed: boolean;
}

export const NotificationsPanel = (props: NotificationsPanelProps) => {
  const fider = useFider();
  const [subscribed, setSubscribed] = useState(props.subscribed);

  const subscribeOrUnsubscribe = async () => {
    const action = subscribed ? actions.unsubscribe : actions.subscribe;

    const response = await action(props.post.number);
    if (response.ok) {
      setSubscribed(!subscribed);
    }
  };

  if (!fider.session.isAuthenticated) {
    return null;
  }

  const button = subscribed ? (
    <Button fluid={true} onClick={subscribeOrUnsubscribe}>
      <FaVolumeMute /> Unsubscribe
    </Button>
  ) : (
    <Button fluid={true} onClick={subscribeOrUnsubscribe}>
      <FaVolumeUp /> Subscribe
    </Button>
  );

  const text = subscribed ? (
    <span className="info">Du erhältst Benachrichtigungen über Aktivitäten für diesen Beitrag.</span>
  ) : (
    <span className="info">Du wirst keine Benachrichtigung über diesen Beitrag erhalten.</span>
  );

  return (
    <>
      <span className="subtitle">Benachrichtigungen</span>
      <List>
        <ListItem>
          {button}
          {text}
        </ListItem>
      </List>
    </>
  );
};
