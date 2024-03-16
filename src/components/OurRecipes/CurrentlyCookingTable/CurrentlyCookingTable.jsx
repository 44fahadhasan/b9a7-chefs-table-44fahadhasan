import PropTypes from "prop-types";
import TableCaptionHead from "../TableCaptionHead/TableCaptionHead";
import TableData from "../TableData/TableData";

const CurrentlyCookingTable = ({ addCurrentCooking }) => {
  return (
    <div className="mt-8">
      <table className="table border-collapse">
        <TableCaptionHead
          title={`Currently cooking: ${addCurrentCooking.length}`}
        />
        <tbody>
          {addCurrentCooking.map((recipe, idx) => (
            <TableData
              recipeNumber={idx}
              recipe={recipe}
              key={idx}
              button={false}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

CurrentlyCookingTable.propTypes = {
  addCurrentCooking: PropTypes.array.isRequired,
};

export default CurrentlyCookingTable;
