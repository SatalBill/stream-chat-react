/* @ts-check */
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import ModalWrapper from './ModalWrapper';

/**
 * Image - Small wrapper around an image tag, supports thumbnails
 *
 * @example ../../docs/Image.md
 * @typedef { import('../../../types').ImageProps } Props
 * @type React.FC<Props>
 */
const Image = ({ image_url, thumb_url, fallback }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const formattedArray = [{ src: image_url || thumb_url }];

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <Fragment>
      <img
        className="str-chat__message-attachment--img"
        data-testid="image-test"
        onClick={toggleModal}
        src={thumb_url || image_url}
        alt={fallback}
      />
      <ModalWrapper
        images={formattedArray}
        toggleModal={toggleModal}
        modalIsOpen={modalOpen}
      />
    </Fragment>
  );
};

Image.propTypes = {
  /** The full size image url */
  image_url: PropTypes.string,
  /** The thumb url */
  thumb_url: PropTypes.string,
  /** The text fallback for the image */
  fallback: PropTypes.string,
};

export default React.memo(Image);
