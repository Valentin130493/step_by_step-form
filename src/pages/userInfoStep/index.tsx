import { UserInfoFields } from "../../components/main/forms/UserInfoFields.tsx";
import { ROUTES } from "../../routes";
import { ComponentWrapper } from "../../components/main/ui/ComponentWrapper.tsx";
import { CustomForm } from "../../components/main/forms/CustomForm.tsx";

const UserInfoStep = () => {
  return (
    <ComponentWrapper>
      <CustomForm name={"userInfo"} navigateTo={ROUTES.jobStep}>
        <UserInfoFields />
      </CustomForm>
    </ComponentWrapper>
  );
};

export default UserInfoStep;
