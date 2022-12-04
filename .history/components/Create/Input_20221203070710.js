import { BiCategoryAlt } from "react-icons/bi";
import { Field } from "formik";
import { MdAdd } from "react-icons/md";

const styles = {
  formContainer: "p-4 border border-gray-300 rounded-lg w-full",
  inputIcon: "text-2xl text-textColor",
  inputContainer: (error, touched) =>
    `flex items-center space-x-3 border-b my-5 ${
      error && touched ? "border-red-400" : "border-gray-300"
    } transition-all ease-in duration-100 py-1`,
  input: "bg-transparent outline-none font-medium text-lg flex-1",
  categoryContainer: `w-full p-2 capitalize rounded-md border border-gray-300
       shadow-md outline-none text-lg font-medium transition-all ease-in duration-200`,
  categoryHeading:
    "flex items-center space-x-3 font-medium text-lg text-gray-400",
  addContainer:
    "flex items-center space-x-3 px-2 pb-1 mt-3 border-b border-gray-300 w-fit",
};

export const Input = ({
  options,
  name,
  placeholder,
  icon,
  type,
  errors,
  touched,
}) => {
  return type === "select" ? (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className={styles.categoryHeading}>
          <BiCategoryAlt className={styles.inputIcon} />
          <p>Category</p>
        </div>
        <Field as={type} name={name} className={styles.categoryContainer}>
          {options.map((option, index) => (
            <option className={styles.category} key={index} value={option}>
              {option}
            </option>
          ))}
        </Field>
      </div>
      <div className={styles.addContainer}>
        <input
          className="bg-transparent w-full outline:none"
          placeholder="Add a new Category"
        />
        <div className="w-8 h-8 bg-card flex items-center justify-center rounded-full">
          <MdAdd className="text-xl" />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className={styles.inputContainer(errors[name], touched[name])}>
        {icon}
        <Field
          name={name}
          placeholder={placeholder}
          type={type}
          className={styles.input}
        />
      </div>
    </div>
  );
};
