const Filter = ({
    handleChangeFilter,
    value
}) => {
    return (
    <>
        <h3>Find contacts by name</h3>
        <input
            type="text"
            name="findName"
            value={value}
            onChange={handleChangeFilter}
        />  
    </>
  );
};

export { Filter };