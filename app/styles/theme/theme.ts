export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  fonts: {
    regular: string;
    bold: string;
  };
}

// Light theme
export const lightTheme: Theme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#f1f1f1',
    text: '#333333',
  },
  fonts: {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#1abc9c',
    secondary: '#e74c3c',
    background: '#2c3e50',
    text: '#ecf0f1',
  },
  fonts: {
    regular: 'Roboto-Regular',
    bold: 'Roboto-Bold',
  },
};
