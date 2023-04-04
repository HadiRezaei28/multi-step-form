import * as yup from "yup";

export const PersonalInfoSchema = yup.object({
  name: yup.string("نام را وارد کنید").required("نام الزامی می باشد"),
  email: yup
    .string("ایمیل را ثبت کنید")
    .email("ایمیل معتبر نیست")
    .required("ایمیل الزامی می باشد"),
  phone: yup
    .number("شماره خود را وارد کنید")
    .typeError("شماره تلفن باید عدد باشد")
    .integer("شماره تلفن نمی تواند اعشار داشته باشد")
    .min(9121234567, "مثلا 09121234567")
    .required("شماره تلفن الزامی می باشد"),
});

export const SelectPlanSchema = yup.object({
  radioValue: yup
    .string("باید یکی از موارد را حتما انتخاب کنید")
    .required("باید یکی از موارد را انتخاب کنید"),
});
