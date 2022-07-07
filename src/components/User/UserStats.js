import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { lazy, Suspense, useEffect } from "react";
import { GET_STATS } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Stats" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};
export default UserStats;
