import toast from "react-hot-toast";

export const handleCopy = (value) => {
  navigator.clipboard.writeText(value).then(
    () => {
      toast.success("Copied!");
    },
    (err) => {
      console.error("Could not copy text: ", err);
    },
  );
};
