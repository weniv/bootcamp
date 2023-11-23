export const handleClipBoard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('주소가 복사되었습니다.');
  } catch (e) {
    alert('주소 복사에 실패하였습니다. 다시 시도해주세요.');
  }
};
