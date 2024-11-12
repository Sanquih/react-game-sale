import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Chunck = {
  value: string;
};

export default function useChunck() {
  return useQuery({
    queryKey: ["chunck"],
    staleTime: 0,
    queryFn: () =>
      axios
        .get<Chunck>("https://api.chucknorris.io/jokes/random")
        .then((res) => res.data),
  });
}
