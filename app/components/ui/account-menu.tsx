'use client';

import UseDialog from '@/hooks/use-dialog';
import {
  AccountMenuBarButton,
  Dialog,
  DialogAccountWithDrawal,
  DialogLogout,
  MenuBarButton,
} from '../index';

interface Props {
  onClick: () => void;
}

function AccountMenu({ onClick }: Props) {
  const {
    isDialogOpen: isLogoutDialogOpen,
    setIsDialogOpen: setIsLogoutDialogOpen,
    dialogOutsideClick: logoutDialogOutsideClick,
    dialogRef: logoutDialogRef,
  } = UseDialog();
  const {
    isDialogOpen: isWithDrawalDialogOpen,
    setIsDialogOpen: setIsWithDrawalDialogOpen,
    dialogOutsideClick: withDrawalDialogOutsideClick,
    dialogRef: withDrawalDialogRef,
  } = UseDialog();
  const handleCloseLogoutDialog = () => {
    setIsLogoutDialogOpen(false);
  };
  const handleCloseWithDrawalDialog = () => {
    setIsWithDrawalDialogOpen(false);
  };

  return (
    <>
      <AccountMenuBarButton socialType="google" onClick={onClick} />
      <MenuBarButton
        title="로그아웃"
        onClick={() => setIsLogoutDialogOpen(true)}
      />
      <Dialog
        isOpen={isLogoutDialogOpen}
        dialogOutsideClick={logoutDialogOutsideClick}
        dialogRef={logoutDialogRef}
      >
        <DialogLogout onClose={handleCloseLogoutDialog} />
      </Dialog>
      <MenuBarButton
        title="계정 탈퇴"
        onClick={() => setIsWithDrawalDialogOpen(true)}
      />
      <Dialog
        isOpen={isWithDrawalDialogOpen}
        dialogOutsideClick={withDrawalDialogOutsideClick}
        dialogRef={withDrawalDialogRef}
      >
        <DialogAccountWithDrawal onClose={handleCloseWithDrawalDialog} />
      </Dialog>
    </>
  );
}

export default AccountMenu;
