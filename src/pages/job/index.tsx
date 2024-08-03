import { CustomForm } from "../../components/main/forms/CustomForm.tsx";
import { JobInfoFields } from "../../components/main/forms/JobInfoFields.tsx";
import { ComponentWrapper } from "../../components/main/ui/ComponentWrapper.tsx";
import { ROUTES } from "../../routes";

const JobInfoStep = () => {
  return (
    <ComponentWrapper>
      <CustomForm name={"jobInfo"} navigateTo={ROUTES.creditStep}>
        <JobInfoFields />
      </CustomForm>
    </ComponentWrapper>
  );
};

export default JobInfoStep;
