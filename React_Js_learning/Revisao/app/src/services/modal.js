import swal from "sweetalert";

const show = () => {
  swal({
    title: "Perfeito",
    text: "Aproveite nosso site",
    icon: "success",
  });

  return swal;
};

export default show;
