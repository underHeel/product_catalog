/* eslint-disable react/no-children-prop */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import { ArrowRightIcon } from '../../components/ui/icons/ArrowRightIcon';
import { ArrowLeftIcon } from '../../components/ui/icons/ArrowLeftIcon';
import { HomeIcon } from '../../components/ui/icons/HomeIcon';
import { ColorButton } from '../../components/ui/buttons/ColorButton/ColorButton';
import { Button } from '../../components/ui/buttons/Button';
import { IconButton } from '../../components/ui/buttons/IconButton';
import { FavoriteIcon } from '../../components/ui/icons/FavoriteIcon';

export const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToPhones = () => {
    navigate('/phones');
  };

  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <div className={styles.cardWrapper}>
        <div className={styles.headerPath}>
          <div className={styles.homeIcon} onClick={handleNavigateToHome}>
            <HomeIcon />
          </div>
          <ArrowRightIcon />
          <div className={styles.categoryText} onClick={handleNavigateToPhones}>
            Phones
          </div>
          <ArrowRightIcon />
          <div className={styles.productText}>Some Product</div>
        </div>
        <div className={styles.backButton} onClick={handleNavigateToPhones}>
          <ArrowLeftIcon fill="#0F0F11" />
          <div className={styles.backText}>Back</div>
        </div>
        <div className={styles.productTitle}>
          <h2>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h2>
        </div>
        <div className={styles.picturesWrapper}>
          <div className={styles.mainPictureWrapper}>
            <img
              className={styles.mainPicture}
              // eslint-disable-next-line no-octal-escape
              src="public\img\phones\apple-iphone-11-pro-max\gold\00.webp"
              alt="iphone11"
            />
          </div>
          <div className={styles.miniPicturesWrapper}>
            <ul className={styles.miniPictures}>
              <li className={styles.miniPicturesElement}>
                <img
                  // eslint-disable-next-line no-octal-escape
                  src="public\img\phones\apple-iphone-11-pro-max\gold\00.webp"
                  alt=""
                  className={styles.miniPicture}
                />
              </li>
              <li className={styles.miniPicturesElement}>
                <img
                  // eslint-disable-next-line no-octal-escape
                  src="public\img\phones\apple-iphone-11-pro-max\gold\00.webp"
                  alt=""
                  className={styles.miniPicture}
                />
              </li>
              <li className={styles.miniPicturesElement}>
                <img
                  // eslint-disable-next-line no-octal-escape
                  src="public\img\phones\apple-iphone-11-pro-max\gold\00.webp"
                  alt=""
                  className={styles.miniPicture}
                />
              </li>
              <li className={styles.miniPicturesElement}>
                <img
                  // eslint-disable-next-line no-octal-escape
                  src="public\img\phones\apple-iphone-11-pro-max\gold\00.webp"
                  alt=""
                  className={styles.miniPicture}
                />
              </li>
              <li className={styles.miniPicturesElement}>
                <img
                  // eslint-disable-next-line no-octal-escape
                  src="public\img\phones\apple-iphone-11-pro-max\gold\00.webp"
                  alt=""
                  className={styles.miniPicture}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.preferences}>
          <div className={styles.preferencesColor}>
            <div className={styles.textWrapper}>
              <div className={styles.textColors}>Avaliable colors</div>
              <div className={styles.textId}>ID: 802390</div>
            </div>
            <div className={styles.colorsOption}>
              <ColorButton color="yellow" onClick={handleNavigateToHome} />
              <ColorButton color="green" onClick={handleNavigateToHome} />
              <ColorButton color="black" onClick={handleNavigateToHome} />
              <ColorButton color="white" onClick={handleNavigateToHome} />
            </div>
          </div>
          <div className={styles.preferencesCapacity}>
            <div className={styles.capacityText}>Select capacity</div>
            <div className={styles.capacityOptions}>
              <ul className={styles.capacityButtons}>
                <li>
                  <Button
                    // eslint-disable-next-line react/no-children-prop
                    children="64 GB"
                    variant="outlined"
                    onClick={handleNavigateToHome}
                  />
                </li>
                <li>
                  <Button
                    // eslint-disable-next-line react/no-children-prop
                    children="256 GB"
                    variant="outlined"
                    onClick={handleNavigateToHome}
                  />
                </li>
                <li>
                  <Button
                    // eslint-disable-next-line react/no-children-prop
                    children="512 GB"
                    variant="outlined"
                    onClick={handleNavigateToHome}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.priceAndCart}>
          <div className={styles.priceText}>
            <h1>$799</h1>
            <s className={styles.oldPrice}>$1199</s>
          </div>
          <div className={styles.cartButtons}>
            <div className={styles.addToCart}>
              <Button
                // eslint-disable-next-line react/no-children-prop
                children="Add to cart"
                variant="contained"
                onClick={handleNavigateToHome}
              />
            </div>
            <div className={styles.addToFavorite}>
              <IconButton children={<FavoriteIcon />} size="large" />
            </div>
          </div>
        </div>
        <div className={styles.generalInfo}>
          <ul className={styles.infoList}>
            <li className={styles.infoElement}>
              Screen
              <div className={styles.infoNums}>6.5” OLED</div>
            </li>
            <li className={styles.infoElement}>
              Resolution
              <div className={styles.infoNums}>Resolution 2688x1242</div>
            </li>
            <li className={styles.infoElement}>
              Processor
              <div className={styles.infoNums}>Processor Apple A12 Bionic</div>
            </li>
            <li className={styles.infoElement}>
              RAM
              <div className={styles.infoNums}>3 GB</div>
            </li>
          </ul>
        </div>
        <div className={styles.aboutBlock}>
          <div className={styles.aboutText}>
            <h2>About</h2>
          </div>
          <div className={styles.paragraph}>
            <h3>And then there was Pro</h3>
            <p className={styles.paragraphText}>
              <br />
              A transformative triple‑camera system that adds tons of capability
              without complexity. <br /> <br />
              An unprecedented leap in battery life. And a mind‑blowing chip
              that doubles down on machine learning and pushes the boundaries of
              what a smartphone can do. Welcome to the first iPhone powerful
              enough to be called Pro.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h3>Camera</h3>
            <p className={styles.paragraphText}>
              <br />
              Meet the first triple‑camera system to combine cutting‑edge
              technology with the legendary simplicity of iPhone. Capture up to
              four times more scene. Get beautiful images in drastically lower
              light. Shoot the highest‑quality video in a smartphone — then edit
              with the same tools you love for photos. You’ve never shot with
              anything like it.
            </p>
          </div>
          <div className={styles.paragraph}>
            <h3>
              Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
              Love it.
            </h3>
            <p className={styles.paragraphText}>
              <br />
              iPhone 11 Pro lets you capture videos that are beautifully true to
              life, with greater detail and smoother motion. Epic processing
              power means it can shoot 4K video with extended dynamic range and
              cinematic video stabilization — all at 60 fps. You get more
              creative control, too, with four times more scene and powerful new
              editing tools to play with.
            </p>
          </div>
        </div>
        <div className={styles.techSpecs}>
          <div className={styles.techSpecsBlock}>
            <div className={styles.techSpecsText}>
              <h2>Tech specs</h2>
            </div>
            <ul className={styles.specsList}>
              <li className={styles.specsElement}>
                Screen
                <div className={styles.specsValue}>6.5” OLED</div>
              </li>
              <li className={styles.specsElement}>
                Resolution
                <div className={styles.specsValue}>2688x1242</div>
              </li>
              <li className={styles.specsElement}>
                Processor
                <div className={styles.specsValue}>Apple A12 Bionic</div>
              </li>
              <li className={styles.specsElement}>
                RAM
                <div className={styles.specsValue}>3 GB</div>
              </li>
              <li className={styles.specsElement}>
                Built in memory
                <div className={styles.specsValue}>64 GB</div>
              </li>
              <li className={styles.specsElement}>
                Camera
                <div className={styles.specsValue}>
                  {' '}
                  12 Mp + 12 Mp + 12 Mp (Triple)
                </div>
              </li>
              <li className={styles.specsElement}>
                Zoom
                <div className={styles.specsValue}>Optical, 2X</div>
              </li>
              <li className={styles.specsElement}>
                Cell
                <div className={styles.specsValue}>GSM, LTE, UMTS</div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.suggestions}>
          <div className={styles.suggestionText}>
            <h2>You may also like</h2>
          </div>
          <div className={styles.moveButtons}>
            <IconButton children={<ArrowLeftIcon fill="#0F0F11" />} />
            <IconButton children={<ArrowRightIcon fill="#0F0F11" />} />
          </div>
        </div>
      </div>
    </div>
  );
};
