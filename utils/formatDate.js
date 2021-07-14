import moment from "moment";

export function formatDate(dateStr){
  return moment(dateStr).format('Do MMMM, YYYY');
}