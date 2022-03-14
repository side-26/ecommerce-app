export const handleSprateNumber = (value) => {
    if (typeof value !== "string"){
        value=value.toString()
    }
    value = value.split("").reverse().join("");
      value = value.toString().replace(/\s/g, "").match(/.{1,3}/g)?.join(",").substr(0, value.length + Math.ceil(value.length / 3)) || "";
    return value.split("").reverse().join("");
  }