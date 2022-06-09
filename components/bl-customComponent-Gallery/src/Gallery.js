import LightBox from './lib/lightbox-jquery.js';
import { GalleryImage } from './GalleryImage.js';

export function Gallery({ images, options }) {

  const {
    gap,
    imageHeight,
    alwaysShowNavOnTouchDevices,
    imageLabel,
    separator,
    disableScrolling,
    fadeDuration,
    imageFadeDuration,
    positionFromTop,
    resizeDuration,
    showImageNumberLabel,
    wrapAround,
    borderRadius,
  } = options;

  LightBox.option({
    'alwaysShowNavOnTouchDevices': alwaysShowNavOnTouchDevices,
    'albumLabel': `${imageLabel} %1 ${separator} %2`,
    'disableScrolling': disableScrolling,
    'fadeDuration': fadeDuration,
    'imageFadeDuration': imageFadeDuration,
    'positionFromTop': positionFromTop,
    'resizeDuration': resizeDuration,
    'showImageNumberLabel': showImageNumberLabel,
    'wrapAround': wrapAround,
  });

  return (
    <div className="bl-customComponent-lightBox" style={{ gap: gap }}>
      {
        images.map(image => (
          <a
            key={ image.objectId }
            data-lightbox="example"
            data-title={ image.title }
            href={ image.url }
          >
            <GalleryImage url={ image.url } imageHeight={ imageHeight } borderRadius={ borderRadius }/>
          </a>
        ))
      }
    </div>
  );
}