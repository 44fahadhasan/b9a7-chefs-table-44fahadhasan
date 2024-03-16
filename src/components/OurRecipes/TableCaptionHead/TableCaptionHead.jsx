import PropTypes from "prop-types";

const TableCaptionHead = ({ title }) => {
  return (
    <>
      <caption className="lexend text-[#282828]  text-xl sm:text-2xl font-semibold">
        {title}
      </caption>
      <thead>
        <tr className="text-[#878787] text-base font-medium">
          <th>No</th>
          <th>Name</th>
          <th>Time</th>
          <th>Calories</th>
        </tr>
      </thead>
    </>
  );
};

TableCaptionHead.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TableCaptionHead;
