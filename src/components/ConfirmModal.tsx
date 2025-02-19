import Button from './Button';

interface ConfirmModalProps {
  title: string;
  description: string;
  leftBtnText: string;
  rightBtnText: string;
  rightBtnAction: () => void;
  closeModal: () => void;
}

function ConfirmModal({
  title,
  description,
  leftBtnText,
  rightBtnText,
  rightBtnAction,
  closeModal
}: ConfirmModalProps) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/20 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg max-w-md w-11/12 md:w-[600px] p-6 shadow-lg z-60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달 헤더 */}
        <div className="w-full text-center mb-4">
          <h2 className="text-lg font-bold text-gray-700">{title}</h2>
        </div>

        {/* 모달 바디 */}
        <div className="w-full mb-6">
          <p className="text-sm text-gray-600 text-center">{description}</p>
        </div>

        {/* 모달 푸터 */}
        <div className="flex justify-evenly gap-2 w-full">
          <Button
            className="w-1/2 p-2 rounded text-[14px] bg-gray-800 hover:bg-gray-600"
            text={leftBtnText}
            onClick={closeModal}
          />
          <Button
            className="w-1/2 p-2 rounded text-[14px]"
            text={rightBtnText}
            onClick={() => {
              closeModal();
              rightBtnAction();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
