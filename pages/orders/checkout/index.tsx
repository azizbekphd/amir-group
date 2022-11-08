import type { NextPage } from "next"
import Head from 'next/head'
import { SearchBar, ProductsGrid, ProductsGridProps } from "../../../components"
import { GetServerSideProps } from "next"
import { Product } from "../../../models"
import { server } from "../../../config"

type CheckoutProps = ProductsGridProps;

const Checkout: NextPage<CheckoutProps> = (props: CheckoutProps) => {
    return (<>
        <Head>
            <title>Оформить заказ</title>
        </Head>
        <div>
            <h1 className="admin-heading-sb">Оформить заказ</h1>
            <SearchBar />
            <ProductsGrid {...props} /> 
        </div>
    </>);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query
  const response = await fetch(`${server}/api/products?`
    + new URLSearchParams({
        page: query.page as string,
        pageSize: query.pageSize as string,
    }))
  const body = await response.json()
  return {
      props: body,
  }
}

export default Checkout;
