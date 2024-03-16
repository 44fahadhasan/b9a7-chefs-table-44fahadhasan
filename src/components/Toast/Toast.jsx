import PropTypes from "prop-types";

const Toast = ({ text }) => {
  return (
    <>
      <div className="toast toast-top toast-end lexend z-50">
        <div className="bg-[#3F00E7] alert alert-info">
          <span className="text-white">{text}</span>
        </div>
      </div>
    </>
  );
};

Toast.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Toast;
