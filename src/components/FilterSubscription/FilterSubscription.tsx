import React from "react";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import Button from "@material-ui/core/Button";
// import { useAppDispatch, useAppSelector } from "../../redux/hook";
// import { filterUsersByStatusSubscription } from "../../redux/slice"
// import { Filter } from "../../utils/types/types";
// import { selectFilterUsers } from "../../redux/selectors";

// const FilterSubscription: React.FC = () => {
//     const dispatch = useAppDispatch();

//     const filter = useAppSelector(selectFilterUsers)

//   const handleFilterChange = ({ target: { value } }: React.ChangeEvent<{ value: string }>) => {
//   const filterValue = value as Filter;

//   dispatch(filterUsersByStatusSubscription(filterValue));
//     };

//   return (
//     <ButtonGroup>
//       <Button
//         onClick={() => handleFilterChange("all")}
//         color={filter === "all" ? "primary" : "default"}
//       >
//         All
//       </Button>
//       <Button
//         onClick={() => handleFilterChange("follow")}
//         color={filter === "follow" ? "primary" : "default"}
//       >
//         Follow
//       </Button>
//       <Button
//         onClick={() => handleFilterChange("following")}
//         color={filter === "following" ? "primary" : "default"}
//       >
//         Following
//       </Button>
//     </ButtonGroup>
//   );

//  export default FilterSubscription;
