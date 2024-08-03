import { CustomForm } from "../../components/main/forms/CustomForm.tsx";
import { CreditInfoFields } from "../../components/main/forms/CreditInfoFields.tsx";
import { ComponentWrapper } from "../../components/main/ui/ComponentWrapper.tsx";
import { ROUTES } from "../../routes";

const CreditInfoStep = () => {
  return (
    <ComponentWrapper>
      <CustomForm name={"creditInfo"} navigateTo={ROUTES.userInfoStep}>
        <CreditInfoFields />
      </CustomForm>
    </ComponentWrapper>
  );
};

export default CreditInfoStep;
