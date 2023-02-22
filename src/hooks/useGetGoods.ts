import { fetchGoods } from "../api/catalog";
import { useEffect, useState } from "react";
import { IGood } from "src/pages/catalog/interface";

const pageLimit = 10;
const GetGoods = (currentCategory: string) => {
    const [goods, setGoods] = useState<Array<IGood>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isRefetching, setIsRefetching] = useState<boolean>(false)
    const [offset, setOffset] = useState<number>(0)
    const getGoods = async () => {
      setIsLoading(true);
      const data = await fetchGoods(currentCategory = '', offset, pageLimit);
      setGoods(data);
      setOffset(offset + pageLimit)
      console.log(offset)
      setIsLoading(false);
    }
    const addFetchGoods = async () => {
      setIsRefetching(true)
      const data = await fetchGoods(currentCategory, offset, pageLimit);
      setGoods([...goods, ...data]);
      setOffset(offset + pageLimit)
      setIsRefetching(false)
    }
    useEffect(() => {
        getGoods();
      }, [currentCategory]);
      return { goods, offset, isLoading, getGoods, addFetchGoods, isRefetching}
}
export default GetGoods;