import { forwardRef } from "react";

const BackgroundImgContainer = ({
  src,
  children,
  bg,
  overlay,
  objectFit = "cover",
  objectPosition = "center",
  bgClassName,
  className,
}) => {
  return (
    <div
      className={bgClassName}
      style={{
        ...(bg && { backgroundColor: `var(--bs-${bg})` }),
        ...(overlay && { position: "relative" }),
        ...(src && {
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: objectFit,
          backgroundPosition: objectPosition,
        }),
      }}
    >
      {overlay && (
        <div
          className={`position-absolute bg-${
            overlay.color || "transparent"
          } h-100 w-100 top-0 opacity-${overlay.opacity.toString() || "0"}`}
        />
      )}
      {!className && children}
      {className && <div className={className}>{children}</div>}
    </div>
  );
};

export default BackgroundImgContainer;
