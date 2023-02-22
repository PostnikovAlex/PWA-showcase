import { AxiosRequestConfig } from 'axios';
import React from 'react';
import { BASEURL } from 'src/consts/Consts';
import { IGood } from 'src/pages/catalog/interface';

import { axiosInstance } from '../axios-config';

export const fetchAllGoodsVanila = async () => {
  return await fetch(`${BASEURL}products/`).catch(response => response.json());
};
export const fetchGoods = async (category: string, offset: number = 0, limit: number): Promise<Array<IGood>> => {
  return category ? axiosInstance.get(`products/category/${category}`, {
    params: {
      limit,
      offset
    }
  } as AxiosRequestConfig) : getAllGoods(offset, limit);
};
export const getAllGoods = async (offset: number, limit: number): Promise<Array<IGood>> => {
  return axiosInstance.get(`products`, {
    params: {
      limit: offset
    }
  } as AxiosRequestConfig);
};

export const getGoodDetail = async (): Promise<IGood> => {
  // const { category } = params
  return axiosInstance.get('products');
};

export const getCategories = async (): Promise<Array<string>> => {
  return axiosInstance.get('products/categories');
};
