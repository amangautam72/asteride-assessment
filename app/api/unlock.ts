export const unlockHome = async (homeId: string): Promise<{ success: boolean; message: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.1;
        if (isSuccess) {
          resolve({ success: true, message: 'Home unlocked successfully!' });
        } else {
          resolve({ success: false, message: 'Failed to unlock the home. Please try again.' });
        }
      }, 2000); 
    });
  };
  