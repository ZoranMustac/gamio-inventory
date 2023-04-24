export default class Styles {
  claimedStyle = `
    bg-lime-100
    w-[75px]
    rounded-[4px]
    font-semibold
    text-[#85EE00]
    text-[12px]
  `;

  ownedStyle = `
    bg-[#4175FA]
    bg-blue-500
    w-[65px]
    rounded-[4px]
    font-semibold
    text-white
    text-[12px]
  `;

  usedStyle = `
    bg-[#E5E5E5]
    w-[51px]
    rounded-[4px]
    font-semibold
    text-[#6F819C]
    text-[12px]
  `;

  shippedStyle = `
  font-semibold
  text-[#143757]
  text-[12px]
  `;

  backgroundWhite = `bg-white shadow-2xl`;

  backgroundGray = `bg-[#F7F7F7] shadow-2xl`;

  backgroundShipped = `border-color bg-[#F7F7F7] shadow-xl`;

  buttons: string = `
    hover:border-solid
    hover:border-[#FC6947]
    hover:border-b-4
    md:hover:text-white
    pb-2
`;

  activeButton: string = `
    border-solid
    border-[#FC6947]
    border-b-4
    md:text-white
    pb-2
    activeButton
`;
}
