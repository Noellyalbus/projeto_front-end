import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";

export const BestSellersSection = () => {
  return (
    <div className="w-full max-w-[407px] my-8">
      <Card className="relative w-full h-[251px] bg-[#d8e3f2] rounded-lg overflow-hidden border-none">
        <CardContent className="p-0 h-full">
          <div className="relative w-full h-full pl-[30px]">
            <img
              className="absolute top-0 right-0 w-[242px] h-[251px] object-cover"
              alt="Supreme product"
              src="/mask-group.png"
            />

            <Badge className="absolute top-[34px] left-[30px] px-[15px] py-[5px] bg-[#e6ff85] text-dark-gray-2 rounded-[29px] font-text-x-small-bold text-[length:var(--text-x-small-bold-font-size)] tracking-[var(--text-x-small-bold-letter-spacing)] leading-[var(--text-x-small-bold-line-height)]">
              30% OFF
            </Badge>

            <div className="absolute top-[76px] left-0 max-w-[172px] font-h3-title-desktop-bold font-[number:var(--h3-title-desktop-bold-font-weight)] text-dark-gray text-[length:var(--h3-title-desktop-bold-font-size)] tracking-[var(--h3-title-desktop-bold-letter-spacing)] leading-[var(--h3-title-desktop-bold-line-height)]">
              Novo drop
              <br />
              Supreme
            </div>

            <Button
              className="absolute bottom-[32px] left-0 w-[153px] h-12 bg-[url('/rectangle-156-1.svg')] bg-no-repeat bg-cover font-text-small-bold font-[number:var(--text-small-bold-font-weight)] text-app-primary text-[length:var(--text-small-bold-font-size)] tracking-[var(--text-small-bold-letter-spacing)] leading-[var(--text-small-bold-line-height)] border-none"
            >
              Comprar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
