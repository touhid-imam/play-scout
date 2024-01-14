import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= 300) {
    return <Text>{children}</Text>;
  }

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <div>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read More" : "Show Less"}
      </Button>
    </div>
  );
};

export default ExpandableText;
