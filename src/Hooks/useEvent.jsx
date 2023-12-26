// import { useEffect, useState } from "react";

import { useQuery } from "react-query";
import useAxiosPublic from "./useAxiosPublic";

const useEvent = () => {
  const axiosPublic = useAxiosPublic();
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //     fetch('http://localhost:5000/events')
  //         .then(res => res.json())
  //         .then(data => {
  //             setMenu(data);
  //             setLoading(false);
  //         });
  // }, [])

  const {
    data: events = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      return res.data;
    },
  });

  return [events, loading, refetch];
};

export default useEvent;
