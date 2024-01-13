import React from "react";
import useTrailers from "../hooks/useTrailers";
import { AspectRatio, Box, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const video = data?.results[0];
  return video ? (
    <AspectRatio ratio={16 / 7}>
      <video src={video.data[480]} poster={video.preview} controls />
    </AspectRatio>
  ) : null;
};

export default GameTrailer;
