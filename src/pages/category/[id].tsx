import { useInfiniteQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import ProductGrid from "../../components/ProductGrid";
import Skelton from "../../components/Skelton";

const SingleCategory = () => {
    const router = useRouter();

    const getSingleCategory = async ({ pageParam = null }) => {
        try {
            let url = `/api/categories/${ router.query.id }`;
            if (pageParam) {
                url += `?cursorId=${ pageParam }`;
            }
            const respJSON = await fetch(url);
            const resp = await respJSON.json();
            return resp;
        } catch (error) {
            throw error;
        }
    };

    const { isLoading, data, fetchNextPage, isError } = useInfiniteQuery(
        [`singleCategory ${ router.query.id as string}`],
        getSingleCategory, 
        {
            enabled: !!router.query.id,
            getNextPageParam: (lastPage) => {
                const nextCursor = 
                lastPage?.category?.products [
                    lastPage?.category?.products?.length -1
                ]?.id;
                return nextCursor;
            },
        }
    );

    const allProductsWithCategory: any = {
        name: "",
        products: [],
        hasMore: true,
    };

    data?.pages.map((page) => {
        
    })
}