import React from "react";
import FieldContext from "./FieldContext";

export default function Form({ children, form, onFinish, onFinishFailed }) {
  // 将回调函数存储到状态管理库中
  form.setCallbacks({
    onFinish,
    onFinishFailed,
  })
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      form.submit()
    }}>
      <FieldContext.Provider value={form}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}
