import { defineMessages, IntlShape } from "react-intl";

export const commonMessages = defineMessages({
  search: {
    defaultMessage: "Tìm kiếm",
  },
  outOfStock: {
    defaultMessage: "Hết hàng",
  },
  lowStock: {
    defaultMessage: "Sắp hết hàng",
  },
  noItemsAvailable: {
    defaultMessage: "Không có sản phẩm nào",
  },
  noPurchaseAvailable: {
    defaultMessage: "Not available for purchase",
  },
  purchaseAvailableOn: {
    defaultMessage: `Will become available for purchase on {date} at {time}`,
  },
  youMightLike: {
    defaultMessage: "Bạn có thể thích",
  },
  choosePaymentMethod: {
    defaultMessage: "Vui lòng chọn phương thức thanh toán.",
  },
  provideEmailAddress: {
    defaultMessage: "Vui lòng cung cấp email.",
  },
  account: {
    defaultMessage: "Tài khoản",
  },
  myAccount: {
    defaultMessage: "Tài khoản của bạn",
  },
  orderHistory: {
    defaultMessage: "Lịch sử đặt hàng",
  },
  addressBook: {
    defaultMessage: "Address book",
  },
  logOut: {
    defaultMessage: "Đăng xuất",
  },
  firstName: {
    defaultMessage: "Họ",
  },
  lastName: {
    defaultMessage: "Tên",
  },
  password: {
    defaultMessage: "Mật khẩu",
  },
  quantity: {
    defaultMessage: "Số lượng",
  },
  sku: {
    defaultMessage: "SKU",
  },
  maxQtyIs: {
    defaultMessage: "Số lượng tối đa là {maxQuantity}",
  },
  qty: {
    defaultMessage: "Số lượng",
  },
  subtotal: {
    defaultMessage: "Subtotal",
  },
  shipping: {
    defaultMessage: "Vận chuyển",
  },
  promoCode: {
    defaultMessage: "Promo code",
  },
  total: {
    defaultMessage: "Tổng",
  },
  totalPrice: {
    defaultMessage: "Tổng tiền",
  },
  checkout: {
    defaultMessage: "Mua hàng",
  },
  eMail: {
    defaultMessage: "Địa chỉ email",
  },
  shortEmail: {
    defaultMessage: "Email",
  },
  loading: {
    defaultMessage: "Loading",
  },
  products: {
    defaultMessage: "Sản phẩm",
  },
  price: {
    defaultMessage: "Giá",
  },
  variant: {
    defaultMessage: "Variant",
  },
  phone: {
    defaultMessage: "Điện thoại",
  },
  phoneNumber: {
    defaultMessage: "Điện thoại: {phone}",
  },
  showEmail: {
    defaultMessage: "Email: {email}",
  },
  save: {
    defaultMessage: "Lưu",
  },
  add: {
    defaultMessage: "Thêm",
  },
  filterHeader: {
    defaultMessage: "LỌC",
  },
  clearFilterHeader: {
    defaultMessage: "XOÁ BỘ LỌC",
  },
  status: {
    defaultMessage: "Trạng thái",
  },
  cancel: {
    defaultMessage: "Huỷ",
  },
  home: {
    defaultMessage: "Home",
  },
});

export const checkoutMessages = defineMessages({
  stepNameAddress: {
    defaultMessage: "Address",
  },
  stepNameShipping: {
    defaultMessage: "Shipping",
  },
  stepNamePayment: {
    defaultMessage: "Payment",
  },
  stepNameReview: {
    defaultMessage: "Review",
  },
  addressNextActionName: {
    defaultMessage: "Continue to Shipping",
  },
  shippingNextActionName: {
    defaultMessage: "Continue to Payment",
  },
  paymentNextActionName: {
    defaultMessage: "Continue to Review",
  },
  reviewNextActionName: {
    defaultMessage: "Place order",
  },
  addNewAddress: {
    defaultMessage: "Add new address",
  },
  shippingMethod: {
    defaultMessage: "SHIPPING METHOD",
  },
  billingAddress: {
    defaultMessage: "BILLING ADDRESS",
  },
  paymentMethod: {
    defaultMessage: "PAYMENT METHOD",
  },
  reviewOrder: {
    defaultMessage: "REVIEW ORDER",
  },
  shippingAddress: {
    defaultMessage: "Shipping Address",
  },
  continueShopping: {
    defaultMessage: "CONTINUE SHOPPING",
  },
});

export const prodListHeaderCommonMsg = defineMessages({
  sortOptionsClear: {
    defaultMessage: "Clear...",
  },
  sortOptionsPrice: {
    defaultMessage: "Price Low-High",
  },
  sortOptionsPriceDsc: {
    defaultMessage: "Price High-Low",
  },
  sortOptionsName: {
    defaultMessage: "Name Increasing",
  },
  sortOptionsNameDsc: {
    defaultMessage: "Name Decreasing",
  },
  sortOptionsUpdatedAt: {
    defaultMessage: "Last updated Ascending",
  },
  sortOptionsUpdatedAtDsc: {
    defaultMessage: "Last updated Descending",
  },
});

export const paymentStatusMessages = defineMessages({
  notCharged: {
    defaultMessage: "Not charged",
  },
  partiallyCharged: {
    defaultMessage: "Partially charged",
  },
  fullyCharged: {
    defaultMessage: "Fully charged",
  },
  partiallyRefunded: {
    defaultMessage: "Partially refunded",
  },
  fullyRefunded: {
    defaultMessage: "Fully refunded",
  },
});

export const orderStatusMessages = defineMessages({
  draft: {
    defaultMessage: "Draft",
  },
  unfulfilled: {
    defaultMessage: "Unfulfilled",
  },
  partiallyFulfilled: {
    defaultMessage: "Partially fulfilled",
  },
  fulfilled: {
    defaultMessage: "Fulfilled",
  },
  canceled: {
    defaultMessage: "Canceled",
  },
});

export function translatePaymentStatus(
  status: string,
  intl: IntlShape
): string {
  switch (status) {
    case "Not charged":
      return intl.formatMessage(paymentStatusMessages.notCharged);
    case "Partially charged":
      return intl.formatMessage(paymentStatusMessages.partiallyCharged);
    case "Fully charged":
      return intl.formatMessage(paymentStatusMessages.fullyCharged);
    case "Partially refunded":
      return intl.formatMessage(paymentStatusMessages.partiallyRefunded);
    case "Fully refunded":
      return intl.formatMessage(paymentStatusMessages.fullyRefunded);
    default:
      return status;
  }
}

export function translateOrderStatus(status: string, intl: IntlShape): string {
  switch (status) {
    case "Draft":
      return intl.formatMessage(orderStatusMessages.draft);
    case "Unfulfilled":
      return intl.formatMessage(orderStatusMessages.unfulfilled);
    case "Partially fulfilled":
      return intl.formatMessage(orderStatusMessages.partiallyFulfilled);
    case "Fulfilled":
      return intl.formatMessage(orderStatusMessages.fulfilled);
    case "Canceled":
      return intl.formatMessage(orderStatusMessages.canceled);
    default:
      return status;
  }
}
