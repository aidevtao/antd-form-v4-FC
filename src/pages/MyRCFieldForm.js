import React, { useEffect } from "react";
import Form, { Field } from "../components/my-rc-field-form/";
import Input from "../components/Input";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function MyRCFieldForm(props) {
  // 本质上获取的就是状态库的操作权限
  const [form] = Form.useForm();

  const onFinish = (val) => {
    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val); //sy-log
  };

  useEffect(() => {
    console.log("form", form); //sy-log
    // form.setFieldsValue({ username: "default" });
  }, []);

  return (
    <div>
      <h3>MyRCFieldForm</h3>
      {/* 操作权限(form)作为属性传递给Form组件 */}
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field name="username" rules={[nameRules]}>
          <Input placeholder="input UR Username" />
        </Field>
        <Field name="password" rules={[passworRules]}>
          <Input placeholder="input UR Password" />
        </Field>
        <button>Submit</button>
      </Form>
    </div>
  );
}