import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/http";

export default function cryptoId() {
  const router = useRouter();
  const { id } = router.query;

  const [singleCryptoData, setSingleCryptoData] = useState([]);
  useEffect(() => {
    GET(`${id}/market_chart?vs_currency=eur&days=7&interval=daily`).then(
      (data) => setSingleCryptoData(data.prices)
    );
  }, []);

  return (
    <Layout>
      <h1> {id}</h1>
    </Layout>
  );
}
