type HttpToaster = {
  type?: 'warning' | 'failed' | 'success',
  message?: string,
};

type HeaderContentPage = {
  primaryTitle?: string,
  pageIcon?: string,
  iconScale?: number,
  count?: number,
  secondaryTitle?: string,
};

type LoadingPage = {
  isLoading?: boolean,
  message?: string,
};

type UserProfile = {
  favoriteList?: any[],
  userInfo?: {};
};

type ProductSpecificsDTOList = {
  id: number,
  specific: string,
  title: string
};

type ProductImagesDTOList = {
  id: number,
  photo: string,
  imageName: string,
};

type ProductDetail = {
  advertisementDTO?: {
    id: number,
    name: string,
    label: string
  },
  machineTypeDTO: {
    id: number,
    typeName: string,
  },
  categoryDTO: {
    id: number,
    title: string,
    name: string
  },
  brandDTO: {
    id: number,
    manufactoringDate: number,
    model: string,
    name: string,
  },
  partNumber: string,
  name: string,
  description: string,
  oldPrice: string,
  productSpecificsDTOList: ProductSpecificsDTOList[],
  productImagesDTOList: ProductImagesDTOList[],
};



