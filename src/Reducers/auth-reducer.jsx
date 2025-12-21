const initialAuthState = {
    users : [],
    currentUser: null,
    isLoading: false,
    error: null,
    token: null
}

// في auth-reducer.jsx
function authReducer(state = initialAuthState, action) {
    switch (action.type) {
        case 'REGISTER_REQUEST':
            return { ...state, isLoading: true, error: null };
            
        case 'REGISTER_SUCCESS':
            // ✅ التحقق المزدوج في Reducer أيضاً
            const userExists = state.users.some(
                user => user.email.toLowerCase() === action.payload.email.toLowerCase()
            );
            
            if (userExists) {
                return {
                    ...state,
                    isLoading: false,
                    error: 'البريد الإلكتروني مسجل مسبقاً'
                };
            }
            
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
                users: [...state.users, action.payload],
                error: null
            };
            
        case 'REGISTER_FAILURE':
            return { ...state, isLoading: false, error: action.payload };
            
        default:
            return state;
    }
}

export { initialAuthState, authReducer };
export default authReducer;