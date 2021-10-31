const Message = {
    FieldRequired:"This field is required",
    InvalidEmail:'you entered invalid email',
    TermsAndConditionsRequired:"Please agree to our terms and conditions",
    maxCharactersError: (field) => `${field || 'Field'} exceed 250 characters`
}
export default Message