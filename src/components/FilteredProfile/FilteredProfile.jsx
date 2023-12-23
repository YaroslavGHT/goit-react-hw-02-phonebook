const FilteredProfiles = ({ contacts, filter }) => {
  return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );
};

export { FilteredProfiles };
       