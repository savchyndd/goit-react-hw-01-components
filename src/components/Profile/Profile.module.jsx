import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 50px;
  width: min-content;

  background: linear-gradient(180deg, transparent 50%, rgba(142, 227, 212, 0.22) 50%);
border-radius: 18px;
`
export const Description = styled.div`
  position: relative;
  text-align: center;

  width: 100%;
  padding: 16px;

  border-radius: 28px;
  background: #FFFFFF;
  box-shadow: 0px 10px 30px rgba(89, 213, 189, 0.45);
`
export const AvatarImg = styled.img`
  position: absolute;
  transform: translate(-50px, -60px);

  max-height: 92px;
  border-radius: 50%;
  background: #D9D9D9;
  border: 6px solid #FFFFFF;
`
export const AvatarName = styled.p`
  font-weight: 700;
  line-height: 1.187;

  margin-top: 49px;
  margin-bottom: 0;
  color: #000000;
`
export const AvatarTag = styled.p`
  font-size: 12px;

  margin-top: 6px;
  margin-bottom: 0;
  color: #969696;
`
export const AvatarLocation = styled.p`
  font-weight: 700;
  font-size: 12px;

  margin-top: 6px;
  margin-bottom: 0;
  color: #000000;
`
export const ProfileStats = styled.ul`
list-style: none;
display: flex;
padding: 12px;
margin: 0;
 li{
  display: grid;
  width: 80px;
  justify-items: center;
  :not(:last-child){
    border-right: 1px solid #999999;
  }
  @media screen and (min-width: 768px){
    width: 128px;
  }
 }
`
export const StatsLabel = styled.span`
font-weight: 400;
font-size: 12px;

margin-bottom: 6px;
color: #999999;
`
export const StatsQuantity = styled.span`
font-weight: 700;
font-size: 24px;

color: #000000;
`
