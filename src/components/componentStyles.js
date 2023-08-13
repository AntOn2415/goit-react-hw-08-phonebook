export const MediaScreenCommon = `
@media screen and (max-width: 667px) {
  max-width: 740px; 
}

@media screen and (min-width: 668px) {
  max-width: 1024px; 
  padding: 0 30px;
}

@media screen and (min-width: 1024px) {
  max-width: 1600px; 
  padding: 0 60px;
}
`;

export const VisibilityHidden = `
position: absolute;
white-space: nowrap;
width: 1px;
height: 1px;
overflow: hidden;
border: 0;
padding: 0;
clip: rect(0 0 0 0);
clip-path: inset(50%);
margin: -1px;
`;

// form styles
export const FormCommon = `
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const LabelCommon = `
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  transition: font-size 300ms, color 300ms ease;
`;

export const IconWrapperCommon = `
  position: absolute;
  top: 55%;
  left: 10px;
  transition: color 300ms ease;
`;

export const InputCommon = `
  min-width: 180px;
  padding: 10px;
  padding-left: 34px;
  outline: none;
  transition: border-color 300ms ease;
`;

export const InputFormCommon = `
  @media screen and (min-width: 844px) {
    min-width: 250px;
  }

  @media screen and (min-width: 1024px) {
    min-width: 390px;
  }
`;

export const BtnCommon = `
margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  transition: box-shadow 300ms, background-color 300ms ease;
`;

// contact item styles

export const ContactLiCommon = `
  display: flex;
`;

export const ContactContainerCommon = `
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 210px;
  transition: background-color 300ms, border 300ms, box-shadow 300ms ease;

  @media screen and (min-width: 717px) {
    min-width: 390px;
  }

  @media screen and (min-width: 668px) and (max-width: 752px) {
    max-width: 340px;
  }
`;

export const FirstLetterNameCommon = `
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
`;

export const ContactCardCommon = `
  display: flex;
  align-items: center;
  padding: 4px 8px;
  gap: 10px;
`;

export const ContactContentCommon = `
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  cursor: pointer;
`;

export const NameSpanCommon = `
  white-space: nowrap;
`;

export const CallACommon = `
  padding-left: 20px;
  cursor: default;
`;

export const ContainerIconCommon = `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 300ms, color 250ms ease;
  cursor: pointer;
`;

export const ContactActionsContainerCommon = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 8px 8px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;

export const EditContactBtnCommon = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 2px 4px;
  width: 68px;
  height: 26px;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: box-shadow 300ms, background-color 300ms, color 250ms ease;

`;

export const ContactBtnCommon = `
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 4px;
  width: 68px;
  height: 26px;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: box-shadow 300ms, background-color 300ms, color 250ms ease;
`;

export const LetterContainerCommon = `
  margin-left: 8px;
  width: 15px;
  height: 20px;
`;

export const FirstLetterContactsGroupCommon = `
  text-align: center;
`;

// contact list styles
export const ContactsContainerCommon = `
  padding: 0;
`;

export const ContactUlCommon = `
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 1px;
`;

export const LoaderRotatingLinesContainerCommon = `
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 999;
`;

export const EmptyContactsMessageCommon = `
  padding: 0;
  margin: 20px;
  text-align: center;
`;
